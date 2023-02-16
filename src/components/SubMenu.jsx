import * as React from 'react';
// import eventBus from '../eventBus';

import SubSubmenu from './Subsubmenu';

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const SubMenu = ({submenu, closeSubmenu, lineName, families}) => {
    const submenu_wrapper = React.useRef(null);
    // const scroll_handler_wrapper = React.useRef(null);

    function animate() {
        submenu_wrapper.current.classList.toggle("animate");
    }

    // animate opening and closing of submenu
    React.useEffect(() => {
        submenu && animate(submenu_wrapper);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [submenu]);

    // setting submenu top value
    // React.useEffect(() => {
    //     eventBus.on('menuTopValue', (topValue) => {
    //         submenu_wrapper.current.style.top = `${topValue}px`;
    //     });
    //     return () => {
    //         eventBus.off('menuTopValue');
    //     }

    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    // names of family (familije)
    const [familyName, setFamilyName] = React.useState('');

    // names of groups of products (grupe) (e.g. Bakarne cevi - PVC, Čelične cevi (crne), Kompresioni fiting - COMAP, ...)
    const [groups, setGroups] = React.useState([]);

    const handleClick = (index) => {
        setFamilyName(families[index].name);
        setGroups(families[index].groups);
    }

    // state of subSubmenu (open or closed)
    const [subSubmenu, setSubSubmenu] = React.useState(false);

    function openSubSubmenu() {
        setSubSubmenu(true);
    }

    function closeSubSubmenu() {
        setSubSubmenu(false);
    }

    return ( 
        <>
            <SubSubmenu 
                subSubmenu={subSubmenu} 
                closeSubSubmenu={closeSubSubmenu}
                lineName={lineName}
                familyName={familyName}
                groups={groups}
            />
            <div
                className="scroll-handler"
                ref={submenu_wrapper}
                style={{
                    // border: '2px solid red',
                    background: "black",
                    zIndex: 2,
                    width: "300px",
                    height: '-webkit-fill-available',
                    marginLeft: '600px',
                    padding: '10px 5px',
                    position: 'absolute',
                    top: '165px',
                    display: 'flex',
                    flexDirection: 'column',
                    // justifyContent: 'center',
                    alignItems: 'center',
                    overflowY: 'auto',
                    boxSizing: 'border-box',
                    transition: "margin-left 0.25s",
                }}
            >
                <List className="ch-list">
                    <ListItem disablePadding className="ch-menu-item">
                        <ListItemButton
                            onClick={ () => {animate(submenu_wrapper); closeSubmenu()} }
                        >
                        <ListItemText primary='Početni meni' />
                        <ListItemIcon sx={{ color: "#D2D5D1", minWidth: 40 }}>
                            <NavigateBeforeIcon 
                                sx={{
                                    position: 'relative',
                                    left: '25px'
                                }} 
                            />
                        </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                </List>
                <div className="ch-menu-splitter">
                    {lineName.toUpperCase()}
                    <hr />
                </div>
                <List className="ch-list">
                    {
                        families.map((family, index) => (
                            <React.Fragment key={index}>
                            <ListItem  disablePadding className="ch-menu-item">
                                <ListItemButton onClick={() => {handleClick(index); openSubSubmenu() }}>
                                    <ListItemText primary={family.name} />
                                    <ListItemIcon sx={{ color: "#D2D5D1", minWidth: 40 }}>
                                        <NavigateNextIcon sx={{
                                            position: 'relative',
                                            left: '25px'
                                        }} />
                                    </ListItemIcon>
                                </ListItemButton>
                            </ListItem>
                            </React.Fragment>
                        ))
                    }
                </List>
            </div>
        </>
     );
}
 
export default SubMenu;
