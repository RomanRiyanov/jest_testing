/* eslint-disable testing-library/render-result-naming-convention */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Search from "./Search";

const onChange = jest.fn();

describe('Search component', () => {

    it('Search component renders', () => {
        render(
            <Search onChange={onChange} value='' >
                 Find: 
            </Search>
        );

        expect(screen.getByText(/find/i)).toBeInTheDocument()
    });

    it('Search renders without children', () => {
        render(
            <Search onChange={onChange} value='' />
        );

        expect(screen.getByText(/search/i)).toBeInTheDocument()
    });

    it('Search renders without placeholder', () => {
        render(
            <Search onChange={onChange} value='' />
        );

        expect(screen.getByPlaceholderText(/Search.../i)).toBeInTheDocument()
    });

    it('Search renders with custom placeholder', () => {
        render(
            <Search onChange={onChange} value='' placeholder='input text here'/>
        );

        expect(screen.getByPlaceholderText(/here/i)).toBeInTheDocument()
    });

    it('onChange have been evoked several times', () => {
        render(
            <Search onChange={onChange} value='' >
                 Find: 
            </Search>
        );

        userEvent.type(screen.getByRole('textbox'), 'Paraglider');

        expect(onChange).toHaveBeenCalledTimes(10);
    });

    it('Dynamic class changing', () => {
        render(
            <Search onChange={onChange} value='Saab' />
        );
        
        const label = screen.getByText('Search');
        const input = screen.getByRole('textbox');

        expect(label).toHaveClass('label');
        expect(input).toHaveClass('input');
        expect(input).toHaveClass('filled');

        // toHaveStyle работает в том случае, если ты передашь стили (display: flex) через атрибут style, иначе это просто стили с класса
        expect(label).toHaveStyle('display: flex');
    });

    it('Search snapshot', () => {
        const search = render(
            <Search onChange={onChange} value='' >
                 Find: 
            </Search>
        );

        expect(search).toMatchSnapshot();
    })
})