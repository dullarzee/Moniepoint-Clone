import proptype from 'prop-types'

ScrollRolly.propTypes = {
    children:proptype.object,
}

export default function ScrollRolly({children}){
    return(
        <>
         <div className="flex ">
            {children}
         </div>
        </>
    );
}