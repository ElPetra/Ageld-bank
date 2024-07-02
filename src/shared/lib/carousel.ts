import { useEffect, useRef, useState, type RefObject } from 'react';

function isTouchEvent(e: Event): e is TouchEvent {
    return 'touches' in e && 'changedTouches' in e && 'targetTouches' in e;
}

function isMousePointerEvent(e: Event): e is PointerEvent {
    return 'pointerType' in e && e.pointerType === 'mouse';
}

export const useCarouselControls = (
    length: number,
    container: RefObject<HTMLDivElement>,
    angle: number
) => {
    const [curRotate, setCurRotate] = useState(0);
    const active = useRef(0);
    const carouselContainer = container.current;

    useEffect(() => {
        function swipeOn(device: string, e: PointerEvent) {
            if (carouselContainer) {
                const startTime = Date.now();
                const startPoint = e.clientX;
                carouselContainer.addEventListener(
                    device === 'pk' ? 'pointerup' : 'touchend',
                    evt => {
                        evt.preventDefault();
                        const difTime = Date.now() - startTime;
                        let range = 0;
                        if (isMousePointerEvent(evt)) {
                            range = evt.clientX;
                        } else if (isTouchEvent(evt)) {
                            range = evt.changedTouches[0].clientX;
                        }
                        const distance = startPoint - range;
                        if (difTime <= 1500) {
                            if (Math.abs(distance) > 100) {
                                if (distance > 0) {
                                    changeRotateByControl('next');
                                } else {
                                    changeRotateByControl('prev');
                                }
                            }
                        }
                    },
                    { once: true }
                );
            }
        }

        function pointerHandler(e: PointerEvent) {
            if (e.pressure === 0) {
                return;
            } else if (e.pressure === 0.5) {
                swipeOn('pk', e);
            } else if (e.pressure > 0.5) {
                swipeOn('mob', e);
            }
        }
        if (carouselContainer) {
            carouselContainer.addEventListener('pointermove', pointerHandler);
            return () =>
                carouselContainer.removeEventListener(
                    'pointermove',
                    pointerHandler
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
