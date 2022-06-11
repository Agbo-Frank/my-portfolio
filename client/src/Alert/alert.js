
function Alert({message}){
    return(
        <div className={`fixed bg-black-200 inset-x-auto z-50 text-sm ${message !== '' && 'bottom-12'} w-fit py-5 px-8 text-center shadow-black-100 shadow-xl border-l-4 border-primary border-solid`}>
            <p>{message}</p>
        </div>
    )
}

export default Alert