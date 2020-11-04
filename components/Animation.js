import { useSpring, animated } from "react-spring"
import range from 'lodash-es/range'


const items = range(5)
const interp = i => r => `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`

const Animation = () => {
    const { radians } = useSpring({
       to: async next => {
           while(1) await next({ radians: 2 * Math.PI })
       },
        from: { radians: 0 },
        config: { duration: 3500 },
        reset: true,
    })
    return items.map(i => <animated.div key={i} className="script-bf-box" style={{ transform: radians.interpolate(interp(i)) }}/>)
}
export default Animation
