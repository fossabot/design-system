import { vi } from 'vitest'
import { fireEvent, render } from '@testing-library/vue'
import Button from './Button.vue'

it('should render properly without any props', () => {
  const screen = render({
    components: { Button },
    template  : `
      <Button>
        Hello
      </Button>
    `,
  })

  const button = screen.queryByTestId('btn')
  const text   = screen.queryByText('Hello')

  expect(button).toBeInTheDocument()
  expect(button).toHaveClass('btn', 'btn--solid', 'btn--md', 'btn--primary')
  expect(text).toBeInTheDocument()
})

it('should have style "outline" if variant props set to "outline"', () => {
  const screen = render({
    components: { Button },
    template  : `
      <Button variant="outline">
        Hello
      </Button>
    `,
  })

  const button = screen.queryByTestId('btn')

  expect(button).toBeInTheDocument()
  expect(button).toHaveClass('btn', 'btn--outline', 'btn--primary')
  expect(button).not.toHaveClass('btn--solid')
})

it('should have style "secondary" if color props set to "secondary"', () => {
  const screen = render({
    components: { Button },
    template  : `
      <Button color="secondary">
        Hello
      </Button>
    `,
  })

  const button = screen.queryByTestId('btn')

  expect(button).toBeInTheDocument()
  expect(button).toHaveClass('btn', 'btn--solid', 'btn--secondary')
  expect(button).not.toHaveClass('btn--primary')
})

it('should have style "lg" if size props set to "lg"', () => {
  const screen = render({
    components: { Button },
    template  : `
      <Button size="lg">
        Hello
      </Button>
    `,
  })

  const button = screen.queryByTestId('btn')

  expect(button).toBeInTheDocument()
  expect(button).toHaveClass('btn', 'btn--solid', 'btn--lg')
  expect(button).not.toHaveClass('btn--md')
})

it('should emit "click" when button is clicked', async () => {
  const spy    = vi.fn()
  const screen = render({
    components: { Button },
    template  : `
      <Button @click="onClick">
        Hello
      </Button>
    `,
    methods: {
      onClick: spy
    }
  })

  const button = screen.queryByTestId('btn')

  await fireEvent.click(button)

  expect(spy).toBeCalled()
})
