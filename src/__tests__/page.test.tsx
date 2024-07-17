import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import { Navigation } from '@/app/components/Views/Navigation';

describe('Home', () => {

    it('Navigation renders without brand.', () => {

        // Arrange

        render(<Navigation viewModel={null} appViewModel={null} />);

        // Act

        const navigationContent = screen.getByTestId('navigation-content');

        // Assert

        expect(navigationContent.textContent).not.toContain('My Portfolio');
        expect(navigationContent).toContainHTML('<nav data-testid="navigation-content" />');

    });

    it('Navigation renders with brand.', () => {

        // Arrange - navigationViewModel mock

        const navigationViewModel = {
            brand: 'My Portfolio',
            links: [
                { id: '1', text: 'Home', url: '/' },
                { id: '2', text: 'About', url: '/about' },
                { id: '3', text: 'Contact', url: '/contact' }
            ]
        };

        // Act

        render(<Navigation viewModel={navigationViewModel} appViewModel={null} />);

        const navigationContent = screen.getByTestId('navigation-content');

        // Assert

        expect(navigationContent.textContent).toContain('My Portfolio');

        expect(screen.getByTestId('navigation-content')).toBeDefined();

    });
});