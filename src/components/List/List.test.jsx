/* eslint-disable testing-library/render-result-naming-convention */
import { render, screen } from "@testing-library/react";
import List from "./List";

const data = ['Mercedes', 'Alfa Romeo', 'Zhiguli'];

describe('List component', () => {
    it('List renders', () => {
        render(<List items={data}/>);

        expect(screen.getByRole('list')).toBeInTheDocument();
        expect(screen.getByText('Zhiguli')).toBeInTheDocument();
    });

    //text equal it
    test('List renders without data', () => {
        render(<List />);

        expect(screen.queryByRole('list')).toBeNull();
    });

    test('List snapshot', () => {
        const list = render(<List items={data} />);
        
        expect(list).toMatchSnapshot()
    })

    test('List empty snapshot', () => {
        const list = render(<List />);
        
        expect(list).toMatchSnapshot()
    })
});