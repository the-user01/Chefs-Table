import PropTypes from "prop-types";

const CookingInfo = (props) => {
    const { cookItem, handlePrepareBtn, prepareItem } = props;


    return (
        <div>
            {/* Want to cook sec */}

            <div>
                <div className="text-center font-bold p-4">
                    <h1 className="text-2xl">Want to cook: {cookItem.length}</h1>
                    <hr className="mb-4 mt-4" />
                </div>

                <div>

                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    cookItem.map(item => <tr key={item.id}>
                                        <th>1</th>
                                        <td>{item.title}</td>
                                        <td>{item.cook_time} <br /> minutes</td>
                                        <td>{item.calories} <br /> calories</td>
                                        <td><button onClick={() =>handlePrepareBtn(item.id, item)}
                                            className="btn rounded-full bg-[#0BE58A] text-[#150B2B]">Preparing</button></td></tr>)
                                }


                            </tbody>
                        </table>
                    </div>

                </div>

            </div>

            {/* Preparing Sec */}

            <div className="mt-4">
                <div className="text-center font-bold p-4">
                    <h1 className="text-2xl">Currently cooking: {prepareItem.length}</h1>
                    <hr className="mb-4 mt-4" />
                </div>

                <div>

                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    prepareItem.map(item => <tr key={item.id}>
                                        <th>1</th>
                                        <td>{item.title}</td>
                                        <td>{item.cook_time} <br /> minutes</td>
                                        <td>{item.calories} <br /> calories</td></tr>)
                                }

                            </tbody>
                        </table>
                    </div>

                </div>

            </div>
            
            <div className="flex justify-end mt-4 gap-6">
                <div>
                    <p className="font-bold">Total Time =<br /> {} minutes</p>
                </div>
                <div>
                    <p className="font-bold">Total Calories =<br /> {} calories</p>
                </div>
            </div>

        </div>
    );
};

CookingInfo.propTypes = {
    cookItem: PropTypes.object,
    prepareItem: PropTypes.object,
    handlePrepareBtn: PropTypes.function
}

export default CookingInfo;