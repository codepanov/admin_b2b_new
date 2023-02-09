import * as React from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const SubSubmenu = ({subSubmenu, closeSubSubmenu, lineName, familyName, groups}) => {
    const subsubmenu_wrapper = React.useRef(null);
    // const scroll_handler_wrapper = React.useRef(null);

    function animate() {
        subsubmenu_wrapper.current.classList.toggle("animate");
    }

    // when subSubmenu is opened, animate the opening of submenu, and take care of ellipsis
    React.useEffect(() => {

        // animate opening and closing of submenu
        subSubmenu && animate(subsubmenu_wrapper);

        // detect overflow of text in line name element and enable ellipsis
        const lineName = document.querySelector('.ellipsis');
        const hr = document.querySelector('.ellipsis hr');
        const isEllipsisActive = (element) => { return (element.offsetWidth < element.scrollWidth) }
        if (isEllipsisActive(lineName)) {
            hr.style.display = 'none';
            lineName.style.overflow = 'hidden';
            lineName.style.textOverflow = 'ellipsis';
            lineName.style.whiteSpace = 'nowrap';
            lineName.style.display = 'block';
        } else {
            hr.style.display = 'block';
            lineName.style.display = 'flex';
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [subSubmenu]);

    //   // activates only if scroll is active
    //   React.useEffect(() => {
    //         scroll_handler_wrapper.current.style.height = 'unset';
    //         if (subSubmenu && scroll_handler_wrapper.current.scrollHeight > scroll_handler_wrapper.current.clientHeight)
    //             scroll_handler_wrapper.current.style.height = `${scroll_handler_wrapper.current.offsetHeight - 169}px`;
    //   }, [subSubmenu])

    return (
        <>
            <div
                ref={subsubmenu_wrapper}
                style={{
                    // border: '2px solid red',
                    background: "black",
                    zIndex: 3,
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
                <List className="ch-sub-button">
                    <ListItem  
                        disablePadding 
                        className="ch-menu-item"
                        // sx={{
                        //     position: 'relative',
                        //     top: '160px',
                        // }}
                    >
                        <ListItemButton
                            onClick={ () => {animate(subsubmenu_wrapper); closeSubSubmenu()} }
                        >
                            <ListItemText primary={lineName} />
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
                <div 
                    className="ch-menu-splitter ellipsis"
                    // style={{
                    //     position: 'relative',
                    //     top: '169px',
                    //     padding: '0 5px',
                    // }}
                >
                    { familyName.toUpperCase() }
                    <hr />
                </div>
                {/* <div
                    //   ref={scroll_handler_wrapper}
                    className="scroll-handler"
                    style={{
                        overflowY: 'auto',
                        padding: '0 5px 169px', // 169px added to compensate for the top positioning (otherwise the last item would be cut off)
                        position: 'relative',
                        top: '169px',
                    }}
                > */}
                    <List  className="ch-sub-button">
                        {
                            groups?.map((group, index) => (
                                <React.Fragment key={index}>
                                <ListItem disablePadding className="ch-menu-item">
                                    <ListItemButton onClick={() => {}}>
                                        <ListItemText primary={group} />
                                        <ListItemIcon sx={{ color: "#D2D5D1", minWidth: 40 }} />
                                    </ListItemButton>
                                </ListItem>
                                </React.Fragment>
                            ))
                        }
                    </List>
                {/* </div> */}
            </div>
        </>
    );
        
}

export default SubSubmenu;
