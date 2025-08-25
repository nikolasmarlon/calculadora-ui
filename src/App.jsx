import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { Text } from "./components/Text";

export function App() {
  return (
    <main className="py-28 px-4">
      <Card>
        <Button>CE</Button>
        <Button variant="primary">/</Button>
        <Text>CE</Text>
      </Card>
    </main>
  )
}