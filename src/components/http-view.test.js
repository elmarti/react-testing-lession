import { render, screen, waitFor, within } from '@testing-library/react';
import { HttpView } from './http-view';




const mocks = [
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    }];
beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
        json: jest.fn().mockResolvedValue(mocks)
    })
});
      
test('renders learn react list', async () => {

    render(<HttpView />);
    expect(fetch).toHaveBeenCalledTimes(1);
    const list = screen.getByRole("list")
      const { getAllByRole } = within(list)
      await waitFor(() => {
        const items = getAllByRole("listitem")
        expect(items.length).toBeGreaterThan(0)
      })
});
