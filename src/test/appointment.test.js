import { render, screen } from '@testing-library/react';
import { Appointment } from '../components/Appointment';
import ReactDOM from "react-dom/client";
import { act, Component } from 'react';

describe(Appointment, () => {
    let container;

    beforeEach(() => {
        container = document.createElement("div");
        document.body.replaceChildren(container);
    });


    const render = (component) =>
        act(() =>
            ReactDOM.createRoot(container).render(component)
        );

    it("renders the customer first name", () => {
        const customer = { firstName: 'Ashley' };
        render(<Appointment customer={customer} />)
        expect(document.body.textContent).toContain(
            "Ashley"
        );
    });

})