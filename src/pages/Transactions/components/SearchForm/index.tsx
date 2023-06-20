import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContaier } from "./styles";

export function SearchForm() {
    return (
        <SearchFormContaier>
            <input type="text" placeholder="Busque por transações"/>

            <button type="submit">
                <MagnifyingGlass size={20} />
                Buscar
            </button>
        </SearchFormContaier>
    )
}