function ProjectDetails({ icon, text, link }) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 cursor-pointer"
        >
            <span className="text-primaryColor ">{icon}</span>
            <span
                className={`text-white underline-offset-4 ${link && 'underline decoration-primaryColor'}`}
            >
                {text}
            </span>
        </a>
    );
}

export default ProjectDetails;