import React from 'react'
import TestRenderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router'
import Icon from './.'
import NotFound from '../404'

jest.mock('./getIcon')
// Helper wait function
const wait = (timeout) /* ms */ =>
  new Promise(resolve => setTimeout(resolve, timeout))

describe('Icon', () => {
  it('renders home icon', async () => {
    const testRenderer = TestRenderer.create(
      <MemoryRouter>
        <Icon match={{ params: { name: 'home' } }} />
      </MemoryRouter>
    )
    // Check that h1 has proper title
    expect(
      testRenderer.root.find(el => el.type === 'h1').children
    ).toMatchObject(['Icon ', 'home'])
    // Wait till the icon is loaded
    await wait(0)
    // Check that svg icon is rendered
    expect(testRenderer.root.findAll(el => el.type === 'svg').length).toBe(1)
  })
  it('renders page 404 if the icon was not found', async () => {
    const testRenderer = TestRenderer.create(
      <MemoryRouter>
        <Icon match={{ params: { name: 'some-icon-' + Math.random() } }} />
      </MemoryRouter>
    )
    await wait(0)
    expect(testRenderer.root.findAllByType(NotFound).length).toBe(1)
  })
})
