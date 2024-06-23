import React, { useCallback, useEffect, useMemo } from 'react';
import { observer } from 'mobx-react';
import { AppViewModel } from '../ViewModels/AppViewModel';
import { Canvas } from "@react-three/fiber";
import Scene from "@/app/components/Views/Scene";
import { usePathname } from 'next/navigation';
import Layout from './Layout/Layout';
import { useLocalStorage } from '@/app/hooks/useLocalStorage';
import * as THREE from 'three';

interface MainProps {

    children: React.ReactNode;
    viewModel?: AppViewModel;

}

export const Main = observer((props : MainProps) => {

    const pathname = usePathname();

    const [path, setPath] = useLocalStorage('path', '');

    const backgroundBlurriness = useMemo(() => 0.25, []);

    const backgroundIntensity = useMemo(() => 0.5, []);

    const pathParts = useMemo(() => pathname.split("/"), [pathname]);

    const setCurrentPath = useCallback(() => {
            
        if (props.viewModel?.setCurrentPath) {

            props.viewModel?.setCurrentPath(path);

        }

    }, [path, props.viewModel?.setCurrentPath]);

    useEffect(() => {

        setPath(pathParts[3] || ''); // home, about, work-history, skills, contact

    }, [pathParts, setPath]);

    useEffect(() => {

        setCurrentPath();
        
    }, [path, setCurrentPath]);

    return (

        <Layout classes={`theme-${props.viewModel?.theme}`}>

            <Canvas
                className={`
                    theme-${props.viewModel?.theme} threejs-animation
                    ${props.viewModel?.currentPath}
                `}
                gl={{
                    antialias: false,
                    preserveDrawingBuffer: true,
                    powerPreference: 'high-performance',
                    failIfMajorPerformanceCaveat: false,
                    logarithmicDepthBuffer: false
                }}
                scene={{
                    backgroundBlurriness,
                    backgroundIntensity
                }}
            >

                <Scene />

            </Canvas>

            <main className={`theme-${props.viewModel?.theme} ${props.viewModel?.currentPath}`} data-testid='main-content'>

                {props.children}

            </main>

        </Layout>

    );

});

