
const Page =()=>{

    return(
        <>
            <p className="m-10 text-2xl">{localStorage.getItem('name')}</p>
        </>
    )
}
export default Page;