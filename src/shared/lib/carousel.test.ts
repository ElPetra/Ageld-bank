import { renderHook } from '@testing-library/react';

import { useCarousel } from './carousel';

describe('calculate the rotation angle and distance from the center', () => {
    it('should calculate correct angle and distance for correct length', () => {
        const length = 4;
        const { result } = renderHook(() => useCarousel(length));
        const { angle, distance } = result.current;
        const edge = 500 / Math.sin((180 / length) * (Math.PI / 180)) / 2;
        const height = Math.sqrt(4 * edge ** 2 - 500 ** 2) / 2;
        expect(angle).toBe(90);
        expect(distance).toBe(height);
    });
});
