import * as React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import { lines } from "../temp_data/products";

import Submenu from './SubMenu';

export default function MenuItems() {
    // eslint-disable-next-line
    const [lines_filteredData, setLines_filteredData] = React.useState(lines);

    // names of lines (linije), from which submenu is opened (for example: "Grejanje")
    const [lineName, setLineName] = React.useState('');

    // names of families of products (familije) (e.g. Bakarne cevi, fiting, armatura, ...)
    const [families, setFamilies] = React.useState([]);

    // state of submenu (open or closed)
    const [submenu, setSubmenu] = React.useState(false);

    // // string typed into the search textfield
    // const [searchParam, setSearchParam] = React.useState('');

    // // when search is set to motion, this state is set to true (to open searchSubmenu)
    // const [searchSubmenu, setSearchSubmenu] = React.useState(false);

    const handleClick = (index) => {
        setLineName(lines_filteredData[index].text);
        setFamilies(lines_filteredData[index].families);
    };

    function openSubmenu() {
        setSubmenu(true);
    }

    function closeSubmenu() {
        setSubmenu(false);
    }
    
    // function openSearchSubmenu() {
    //     setSearchSubmenu(true);
    // }
    
    // function closeSearchSubmenu() {
    //     setSearchSubmenu(false);
    // }

    return (
        <>
            <Submenu 
                submenu={submenu}
                closeSubmenu={closeSubmenu} 
                lineName={lineName} 
                families={families}
            />
            <div className="ch-menu-splitter">
                PROGRAM
                <hr />
            </div>
            <List>
                {
                    lines_filteredData.map((line, index) => (
                        <React.Fragment key={index}>
                            <ListItem  disablePadding className="ch-menu-item">
                                <ListItemButton onClick={ () => {handleClick(index); openSubmenu()} }>
                                {/* <ListItemButton onClick={ () => handleClick(index) }> */}
                                    <span className="material-icons" style={{width: 40}}>{line.icon}</span>
                                    <ListItemText primary={line.text} />
                                    <ListItemIcon sx={{ color: "#D2D5D1", minWidth: 40 }}>
                                        <NavigateNextIcon
                                            // sx required to position the icon correctly (a bit to the right)
                                            sx={{
                                                position: 'relative',
                                                left: '25px'
                                            }}
                                        />
                                    </ListItemIcon>
                                </ListItemButton>
                            </ListItem>
                        </React.Fragment>
                    ))
                }
            </List>
            <div className="ch-menu-splitter">
                PORUDŽBINE I FINANSIJE
                <hr />
            </div>
            <List className="ch-list">
                {[
                    {
                        text: "Pregled porudžbina",
                        icon: 'shopping_basket',
                    },
                    {
                        text: "Pregled faktura",
                        icon: 'point_of_sale',
                    },
                    {
                        text: "Finansijsko stanje",
                        icon: 'account_balance_wallet',
                    },
                ].map((item, index) => (
                    <ListItem key={index} disablePadding className="ch-menu-item">
                        <ListItemButton>
                            <span className="material-icons" style={{width: 40}}>{item.icon}</span>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <div className="ch-menu-splitter">
                CENOVNICI
                <hr />
            </div>
            <List className="ch-list">
                {[
                    {
                    text: "Pregled cenovnika",
                    icon: 'request_quote',
                    },
                ].map((item, index) => (
                    <ListItem key={index} disablePadding className="ch-menu-item">
                        <ListItemButton>
                            <span className="material-icons" style={{width: 40}}>{item.icon}</span>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </>
    );
}