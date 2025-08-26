import { Button } from "./components/Button";
import { Calculator } from "./components/Calculator";
import { Card } from "./components/Card";
import { OperationHistory } from "./components/OperationHistory";
import { Text } from "./components/Text";

export function App() {
  return (
    <main className="py-28 px-4 flex gap-4">
      <Calculator />
      <OperationHistory />
    </main>
  )
}