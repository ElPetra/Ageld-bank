import { useEffect, useRef, useState, type RefObject } from 'react';

export const useCarouselControlls = (
    container: RefObject<HTMLDivElement>,
    angle: number
) => {
    const [curRotate, setCurRotate] = useState(0);
    const active = useRef('center');
    const carouselContainer = container.current;
    useEffect(() => {
        function swipeOn(start: number) {
            if (carouselContainer) {
                const startTime = Date.now();
                const startPoint = start;
                const event = 'ontouchend' in window ? 'touchend' : 'pointerup';
                carouselContainer.addEventListener(
                    event,
                    e => {
                        e.preventDefault();
                        const difTime = Date.now() - startTime;
                        const range =
                            'clientX' in e
                                ? e.clientX
                                : e.changedTouches
                                  ? e.changedTouches[0].clientX
                                  : 0;
                        const distance = startPoint - range;
                        if (difTime <= 1500) {
                            const direction = distance > 0 ? 'right' : 'left';
                            if (Math.abs(distance) > 100) {
                                changeRotateByArrow(direction);
                            }
                        }
                    },
                    { once: true }
                );
            }
        }
        function pointerHandler(e: PointerEvent) {
            if (e.pressure > 0) {
                swipeOn(e.clientX);
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
    function changeActive(arrow: 'left' | 'right') {
        const { current } = active;
        if (arrow === 'left') {
            if (current === 'prev') {
                return;
            }
            active.current = current === 'center' ? 'prev' : 'center';
        } else {
            if (current === 'next') {
                return;
            }
            active.current = current === 'center' ? 'next' : 'center';
        }
    }
    function countBlockControllsValues() {
        if (active.current === 'prev') {
            return [curRotate, curRotate - angle, curRotate - 2 * angle];
        } else if (active.current === 'center') {
            return [curRotate + angle, curRotate, curRotate - angle];
        } else if (active.current === 'next') {
            return [curRotate + 2 * angle, curRotate + angle, curRotate];
        }
        return [curRotate];
    }
    function changeRotateByArrow(arrow: 'left' | 'right') {
        const prevRotate = curRotate;
        let nextRotate = null;
        nextRotate = arrow === 'left' ? prevRotate + angle : prevRotate - angle;
        if (carouselContainer) {
            carouselContainer.style.transform = `rotateY(${nextRotate ?? prevRotate}deg)`;
        }
        if (nextRotate !== null) {
            changeActive(nextRotate > prevRotate ? 'left' : 'right');
        }
        setCurRotate(nextRotate ?? prevRotate);
    }

    function changeRotateByControl(control: 'prev' | 'center' | 'next') {
        const prevRotate = curRotate;
        let nextRotate = null;
        const currControlIndex =
            control === 'prev' ? 0 : control === 'center' ? 1 : 2;
        nextRotate = countBlockControllsValues()[currControlIndex];
        if (carouselContainer) {
            carouselContainer.style.transform = `rotateY(${nextRotate ?? prevRotate}deg)`;
        }
        if (nextRotate !== null) {
            active.current = control;
        }
        setCurRotate(nextRotate ?? prevRotate);
    }
    return {
        changeRotateByArrow,
        changeRotateByControl,
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
            const estimatedElement =
                document.querySelector<HTMLElement>('.carousel_element');
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
