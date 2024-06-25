import { For, Input, Stack, Text } from "@chakra-ui/react"
import { Button } from "compositions/ui/button"
import {
  PopoverBody,
  PopoverContent,
  PopoverRoot,
  PopoverTitle,
  PopoverTrigger,
} from "compositions/ui/popover"

export const PopoverSizes = () => {
  return (
    <Stack align="center" direction="row" gap="10">
      <For each={["sm", "md"]}>
        {(size) => (
          <PopoverRoot key={size} size={size}>
            <PopoverTrigger>
              <Button size={size} variant="outline">
                Click me
              </Button>
            </PopoverTrigger>
            <PopoverContent showArrow>
              <PopoverBody>
                <PopoverTitle fontWeight="medium">Naruto Form</PopoverTitle>
                <Text my="4">
                  Naruto is a Japanese manga series written and illustrated by
                  Masashi Kishimoto.
                </Text>
                <Input placeholder="Your fav. character" size={size} />
              </PopoverBody>
            </PopoverContent>
          </PopoverRoot>
        )}
      </For>
    </Stack>
  )
}
