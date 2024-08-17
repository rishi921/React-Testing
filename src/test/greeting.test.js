import { render, screen } from '@testing-library/react';

import Greeting from '../components/Greetings';

describe('Greeting Component', () => {

    test('renders welcome', () => {
        //Arrange
        render(<Greeting />);
        //Act
        const heading = screen.getByText(/Welcome/i);
        //Assert
        expect(heading).toBeInTheDocument();
    })
})

//To run the test: npm resr