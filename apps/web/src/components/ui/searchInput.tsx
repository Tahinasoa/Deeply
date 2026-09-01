import { SearchIcon } from "lucide-react"
import { InputGroup, InputGroupInput, InputGroupAddon, InputGroupButton } from "./input-group"

function SearchInput() {
  return (
    <InputGroup className="w-full max-w-sm bg-background">
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon align="inline-end" className="pr-0">
        <InputGroupButton size="sm" variant="secondary">
          Search
          <SearchIcon />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  )
}
export default SearchInput