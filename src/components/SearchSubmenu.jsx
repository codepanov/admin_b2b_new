import * as React from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import eventBus from "../eventBus";

export default function SearchSubmenu({searchSubmenu, closeSearchSubmenu, lines_filteredData}) {
    
    const searchsubmenu_wrapper = React.useRef(null);
    // const scroll_handler_wrapper_search = React.useRef(null);

    function animate() {
        searchsubmenu_wrapper.current.classList.toggle("animate");
    }

    React.useEffect(() => {
        searchSubmenu && animate(searchsubmenu_wrapper);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchSubmenu]);

    React.useEffect(() => {

        // detect overflow of text in line name element and enable ellipsis | set to fire on every data change
        const lineName = document.querySelectorAll('.ellipsis-search');
        const isEllipsisActive = (element) => { return (element.offsetWidth < element.scrollWidth) }
        lineName.forEach((line) => {
            if (isEllipsisActive(line)) {
                line.firstElementChild.style.display = 'none';
                line.style.display = 'block';
                line.style.overflow = 'hidden';
                line.style.textOverflow = 'ellipsis';
                line.style.whiteSpace = 'nowrap';
                line.style.minHeight = '14px';
            } else {
                line.firstElementChild.style.display = 'block';
                line.style.display = 'flex';
            }
        })

        // // activates only if scroll is active
        // scroll_handler_wrapper_search.current.style.height = 'unset';
        // if (scroll_handler_wrapper_search.current.scrollHeight > scroll_handler_wrapper_search.current.offsetHeight)
        //     scroll_handler_wrapper_search.current.style.height = `${scroll_handler_wrapper_search.current.offsetHeight - 169}px`;

    }, [lines_filteredData])

    function stopSearch() {
        eventBus.emit("stopSearch");
    };

    return (
        <>
        <div
            ref={searchsubmenu_wrapper}
            style={{
                // border: '2px solid red',
                background: "black",
                zIndex: 4,
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
                    onClick={ () => {animate(searchsubmenu_wrapper); closeSearchSubmenu(); stopSearch()} }
                >
                <ListItemText primary={'Izlazak iz pretrage'} />
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
            {
                lines_filteredData.map((line, index) => {
                return (
                    <React.Fragment key={index}>
                    {
                        line.families.map((family, index) => {
                        return (
                            <React.Fragment key={index}>
                            <div className="ch-menu-splitter ellipsis-search">
                                {family.name.toUpperCase()}
                                <hr />
                            </div>
                            {
                                <List className="ch-list">
                                {
                                // ! there is a strong possibility that we can have a slow down here,
                                // ! because MUI components are loading in a multyple loop
                                // ! solution would be to use a simple elements instead of MUI components
                                // ! but then we would have to style them manually
                                // ! or we can utilize some kind of lazy loading
                                // ? this would be a good place to start:
                                // family.groups.map((group, index) => {
                                //   return (
                                //     <React.Fragment key={index}>
                                //       <p style={{color:'green'}}>{group}</p>
                                //     </React.Fragment>
                                //   )
                                // })
                                family.groups.map((group, index) => (
                                    <React.Fragment key={index}>
                                    <ListItem  disablePadding className="ch-menu-item">
                                        <ListItemButton onClick={() => {}}>
                                        <ListItemText primary={group} />
                                        <ListItemIcon sx={{ color: "#D2D5D1", minWidth: 40 }}>
                                        </ListItemIcon>
                                        </ListItemButton>
                                    </ListItem>
                                    </React.Fragment>
                                ))
                                }
                            </List>
                            }
                            </React.Fragment>
                        )
                        })
                    }
                    </React.Fragment>
                )
                })
            }
        </div>
        </>
    )
}