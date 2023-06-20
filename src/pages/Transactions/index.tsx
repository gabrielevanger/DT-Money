import { useEffect } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
 useEffect(() => {
  fetch('http://localhost:3333/transactions')
      .then(response => {
        response.text().then(data => {
          console.log(data)
        })
  })
 },[])

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
      <SearchForm />

      <TransactionsTable>
        <tbody>
          <tr>
            <td width="50%">Desenvolvimento de site</td>
            <td>
              <PriceHighLight variant="income">
              R$ 12.000,00
              </PriceHighLight>
            </td>
            <td>Venda</td>
            <td>13/04/2023</td>
          </tr>
          <tr>
            <td width="50%">Hamburger</td>
            <td>
              <PriceHighLight variant="outcome">
              -R$ 59,00
              </PriceHighLight>
            </td>
            <td>Alimentação</td>
            <td>12/06/2023</td>
          </tr>
        </tbody>
      </TransactionsTable>
      </TransactionsContainer>
    </div>

  )
}