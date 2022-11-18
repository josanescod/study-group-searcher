import { Fragment } from 'react';

import { MdOutlineDarkMode } from 'react-icons/md';
import { GrSun } from 'react-icons/gr';

const ToogleTheme = ({ active, onChangeActive }) => {
    return (
        <Fragment >
            {active ? (
                <MdOutlineDarkMode className="is-hidden-mobile" onClick={onChangeActive} style={{ marginLeft: '89.5%', marginTop: '10px', marginBottom: '10px' }} size="40" color="black" />)
                :
                (<GrSun onClick={onChangeActive} style={{ marginLeft: '89.5%', marginTop: '10px', marginBottom: '10px' }} size="40" color="black" alt="light-theme"/>)
            }
        </Fragment>
    );
};

export default ToogleTheme;