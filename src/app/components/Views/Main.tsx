import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { AppViewModel } from '../ViewModels/AppViewModel';
import { Canvas } from "@react-three/fiber";
import Scene from "@/app/components/Views/Scene";
import { usePathname } from 'next/navigation';

interface MainProps {

    children: React.ReactNode;
    viewModel?: AppViewModel;

}

export const Main = observer((props : MainProps) => {
    const pathname = usePathname();
    const [path, setPath] = useState<string>('');

    useEffect(() => {

        const path = pathname.split("/");

        setPath(path[3] || ''); // home, about, work-history, skills, contact

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {

        if (props.viewModel?.setCurrentPath) {

            props.viewModel?.setCurrentPath(path);

        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [path]); // listens to path changes...

    return (

        <>

            <Canvas
                className={`
                    theme-${props.viewModel?.theme} threejs-animation
                    ${props.viewModel?.currentPath}
                `}
                gl={{ antialias: false }}
            >

                <Scene />

            </Canvas>

            <main className={`theme-${props.viewModel?.theme} ${props.viewModel?.currentPath}`} data-testid='main-content'>

                {props.children}

            </main>

        </>

    );

});