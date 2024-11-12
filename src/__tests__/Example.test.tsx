import '@testing-library/jest-dom'
import {render} from "@testing-library/react"
import { axe, toHaveNoViolations } from 'jest-axe';
import Example from "../example";

expect.extend(toHaveNoViolations);

test('Example page should not have accessibility violations', async ()=> {
    const { container } = render(<Example/>)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
})
