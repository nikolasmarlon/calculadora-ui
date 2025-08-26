import { Button } from "./components/Button";
import { Calculator } from "./components/Calculator";
import { Card } from "./components/Card";
import { OperationHistory } from "./components/OperationHistory";
import { Text } from "./components/Text";

export function App() {
  return (
    <main className="py-28 px-4 flex flex-col items-center gap-2 sm:flex-row  sm:items-stretch sm:px-10">
      <Calculator />
      <OperationHistory />
    </main>
  )
}