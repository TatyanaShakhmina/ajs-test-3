import { getLevel } from '../getLevel.js';
import fetchData from '../http.js';

jest.mock('../http.js');

beforeEach(() => {
    jest.resetAllMocks();
})

test('должен вернуть уровень пользователя при статусе ok', () => {
    fetchData.mockReturnValue({ status: 'ok', level: 42 });

    const result = getLevel(1);
    expect(result).toBe('Ваш текущий уровень: 42');
});

test('должен вернуть сообщение об ошибке при статусе не ok', () => {
    fetchData.mockReturnValue({ status: 'error' });

    const result = getLevel(2);
    expect(result).toBe('Информация об уровне временно недоступна');
});