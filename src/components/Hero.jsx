import { useEffect, useRef, useState } from "react"
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(0);
    const [backgroundIndex, setBackgroundIndex] = useState(1);

    const totalVideos = 4;
    const nextVideoRef = useRef(null);

    const handleVideoLoad = () => {
        setLoadedVideos((prev) => prev + 1);
    }

    const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

    const handleMiniVdClick = () => {
        setHasClicked(true);

        setCurrentIndex(upcomingVideoIndex);
    }

    useEffect(() => {
        if(loadedVideos === totalVideos - 1) {
            setIsLoading(false);
        }
    }, [loadedVideos])

    useGSAP(() => {
        if(hasClicked) {
            gsap.set('#next-video', {visibility: 'visible'});

            gsap.to('#next-video', {
                transformOrigin: 'center center',
                scale: 1,
                width:'100%',
                height: '100%',
                duration: 1,
                ease: 'power1.inOut',
                onStart: () => nextVideoRef.current.play(),
                onComplete: () => {
                    // Update background to match current after animation completes
                    setBackgroundIndex(currentIndex);
                    // Reset the next-video element for the next transition
                    gsap.set('#next-video', {
                        scale: 1,
                        width: '16rem',
                        height: '16rem',
                        visibility: 'hidden'
                    });
                }
            })

            gsap.from('#current-video', {
                transformOrigin: 'center center',
                scale: 0,
                duration: 1.5,
                ease: 'power1.inOut'
            })
        }

    }, {dependencies: [currentIndex]})

    useGSAP(() => {
        gsap.set('#video-frame', {
            clipPath: 'polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)',
            borderRadius: '0 0 40% 10%'
        })

        gsap.from('#video-frame', {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            borderRadius: '0 0 0 0',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '#video-frame',
                start: 'center center',
                end: 'bottom center',
                scrub: true
            }
        })
    }, { dependencies: []})

    const videoUrls = {
        1: 'https://res.cloudinary.com/dpmtezpva/video/upload/v1768125028/hero-1_ennh7e.mp4',
        2: 'https://res.cloudinary.com/dpmtezpva/video/upload/v1768125031/hero-2_slv8ph.mp4',
        3: 'https://res.cloudinary.com/dpmtezpva/video/upload/v1768125049/hero-3_dbqfdy.mp4',
        4: 'https://res.cloudinary.com/dpmtezpva/video/upload/v1768125060/hero-4_wncsgz.mp4',
    };

    const getVideoSrc = (index) => videoUrls[index];

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">

        {isLoading && (
            <div className="flex-center absolute z-50 h-dvh w-screen overflow-hidden bg-violet-50">
                <div className="three-body">
                    <div className="three-body__dot" />
                    <div className="three-body__dot" />
                    <div className="three-body__dot" />
                </div>
            </div>
        )}
        <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
            <div>
                <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                    <div onClick={handleMiniVdClick} className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100">
                        <video
                            src={getVideoSrc(upcomingVideoIndex)}
                            loop
                            muted
                            id="current-video"
                            className="size-64 origin-center scale-150 object-cover object-center"
                            onLoadedData={handleVideoLoad}
                        />
                    </div>
                </div>

                <video
                    ref={nextVideoRef}
                    src={getVideoSrc(currentIndex)}
                    loop
                    muted
                    id="next-video"
                    className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
                    onLoadedData={handleVideoLoad}
                />

                <video
                    src={getVideoSrc(backgroundIndex)}
                    autoPlay
                    loop
                    muted
                    className="absolute left-0 top-0 size-full object-cover object-center"
                    onLoadedData={handleVideoLoad}
                />
            </div>

            <h1 className="special-font hero-heading absolute bottom-5 z-40 text-blue-75">
                G<b>a</b>ming
            </h1>

            <div className="absolute left-0 top-0 z-40 size-full">
                <div className="mt-24 px-5 sm:px-10">
                    <h1 className="special-font hero-heading text-blue-100">
                        Redefi<b>n</b>e
                    </h1>

                    <p className="mb-5 max-w-64 font-robert-regular text-blue-100">Enter the Megame Layer <br /> Unleash the Play Economy </p>

                    <Button id="watch-trailer" title="Watch Trailer" leftIcon={<TiLocationArrow />}
                    containerClass="!bg-yellow-300 flex-center gap-1" />
                </div>
            </div>
        </div>

        <h1 className="special-font hero-heading absolute bottom-5 text-black">
            G<b>a</b>ming
        </h1>
    </div>
  )
}

export default Hero