import { useEffect, useRef, useState, type RefObject } from 'react';

export const useCarouselControls = (
    length: number,
    container: RefObject<HTMLDivElement>,
    angle: number
) => {
    const [curRotate, setCurRotate] = useState(0);
    const active = useRef(0);
    const carouselContainer = container.current;

    useEffect(() => {
        function onPointerEnd(
            e: PointerEvent | TouchEvent,
            startTime: number,
            startPoint: number
        ) {
            const timePassed = Date.now() - startTime;
            const endPoint =
                'clientX' in e
                    ? e.clientX
                    : e.changedTouches
                      ? e.changedTouches[0].clientX
                      : 0;
            const distance = startPoint - endPoint;
            if (timePassed <= 1500) {
                const direction = distance > 0 ? 'prev' : 'next';
                if (Math.abs(distance) > 50) {
                    changeRotateByControl(direction);
                }
            }
        }
        function onPointermove(e: PointerEvent) {
            const isPhone = 'ontouchend' in window;
            if (e.pressure === 0 && !isPhone) {
                return;
            }
            const startTime = Date.now();
            const startPoint = e.clientX;
            const event = isPhone ? 'touchend' : 'pointerup';
            if (carouselContainer) {
                carouselContainer.addEventListener(
                    event,
                    e => onPointerEnd(e, startTime, startPoint),
                    { once: true }
                );
            }
        }
        if (carouselContainer) {
            carouselContainer.addEventListener('pointermove', onPointermove);
            return () =>
                carouselContainer.removeEventListener(
                    'pointermove',
                    onPointermove
                );
        }
    });

    function changeRotateByControl(arrow: 'prev' | 'next') {
        const prevRotate = curRotate;
        const nextRotate =
            arrow === 'prev' ? prevRotate + angle : prevRotate - angle;
        if (carouselContainer) {
            carouselContainer.style.transform = `rotateY(${nextRotate}deg)`;
        }
        active.current = (-nextRotate / angle) % length;
        setCurRotate(nextRotate);
    }

    function changeRotateByIndicator(indicator: number) {
        const nextRotate = -indicator * angle;
        if (carouselContainer) {
            carouselContainer.style.transform = `rotateY(${nextRotate}deg)`;
        }
        active.current = indicator;
        setCurRotate(nextRotate);
    }

    return {
        changeRotateByControl,
        changeRotateByIndicator,
        active: active.current
    };
};

export const useCarousel = (length: number) => {
    const [distance, setDistance] = useState<number>(0);
    const firstRender = useRef(true);
    const angle = 360 / length;

    useEffect(() => {
        if (firstRender) {
            firstRender.current = false;
            const estimatedElement = document.querySelector<HTMLElement>(
                '.carousel-inner__element'
            );
            if (estimatedElement) {
                const estimatedWidth = estimatedElement.offsetWidth;
                const edge =
                    estimatedWidth /
                    Math.sin((180 / length) * (Math.PI / 180)) /
                    2;
                const height =
                    Math.sqrt(4 * edge ** 2 - estimatedWidth ** 2) / 2;
                setDistance(height);
            }
        }
    }, [length]);

    return { angle, distance };
};
