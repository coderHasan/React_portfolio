
import React, { useCallback, useEffect, useState } from 'react'
import PortfolioCard from './PortfolioCard';
import PopupWrapper from './Popup/PopupWrapper';
import PortfolioModal from './portfolioModal/PortfolioModal';


const Projects = ({projects, type}) => {
    const [filterdProject, setFilterdProject] = useState(projects);
    const [popupData, setPopupData] = useState(null);
    const [open, setOpen] = useState(false);

    const filter = useCallback(() => {
        if (type === 'All') return setFilterdProject(projects);
        setFilterdProject(projects.filter((projects) => projects.type === type))
    })

    const closeModal = () => setPopupData(null)

    useEffect(() => filter(), [filter]);

    useEffect(() => {
        if (popupData) setOpen(true)
        else setOpen(false);
    }, [popupData]);

  return (
    <>
        <div 
        className='flex flex-wrap justify-center gap-x-6 max-w-5xl mx-auto
        '
        >
            {filterdProject.map((project, index) => (
                <PortfolioCard
                    key={index}
                    {...project}
                    onClick={() => setPopupData(project)}
                />
            ))}
        </div>  

        {/* === project Modal === */}
        <PopupWrapper
            open={open}
            nested onClose={closeModal}
        >
            <PortfolioModal
                onClose={closeModal}
                popupData={popupData}
            />
        </PopupWrapper>
    </>
  )
}

export default Projects