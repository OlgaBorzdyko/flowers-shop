import { http, HttpResponse } from 'msw'

import { categoriesMock } from './mockData'

export const handlers = [
  http.get('/api/categories', async () => {
    return HttpResponse.json(categoriesMock, { status: 200 })
  })
]
