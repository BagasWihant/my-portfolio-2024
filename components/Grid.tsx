import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

function Grid() {
    return (
        <section id='about'>
            <BentoGrid>
                {
                    gridItems.map(({ className, imgClassName, titleClassName, img, spareImg, id, title, description },i) => (
                        <BentoGridItem

                        key={i}
                        id={i}
                        title={title}
                        description={description}
                        header={i}
                        // icon={item.icon}
                        className={
                            i === 5  ? "md:col-span-3" : 
                            i === 3 ? "md:col-span-2" : 
                            i === 0 || i === 1? "col-span-2" : ""
                    }


                            // imgClassName={imgClassName}
                            // titleClassName={titleClassName}
                            // img={img}
                            // spareImg={spareImg}
                            // id={id}
                            // key={id}
                            // title={title}
                            // description={description}
                        />
                    ))
                }
            </BentoGrid>
        </section>
    )
}

export default Grid