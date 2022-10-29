const Footer = (prop) => {
    const { detail } = prop; // Object destructring
    return (
        <>
            <div className='pt-4  mb-3 font-italic text-pink-400' >
                <h3>* Bar Chart is displaying analogy with USD and Five other country's currencies.</h3>
            </div>
            <p className='ml-8'>Stats :-</p>

            <table className='text-primary-300 pl-3 pt-1 ml-8'>
                {
                    detail.map((value, index) => (
                        <tr key={index}>
                            <th className='pb-1'>{value.name} ({value.rate})</th>
                            <td className='pl-3'>-<span className='ml-3 text-center'>{value.currency}</span></td>
                        </tr>
                    ))
                }
            </table>
        </>
    )
}
export default Footer;