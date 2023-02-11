import * as React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import { lines } from "../temp_data/products";

import Submenu from './SubMenu';
import SearchBar from "./SearchBar";
import SearchSubmenu from "./SearchSubmenu";

const MenuItems = () => {
    // eslint-disable-next-line
    const [lines_filteredData, setLines_filteredData] = React.useState(lines);

    // names of lines (linije), from which submenu is opened (for example: "Grejanje")
    const [lineName, setLineName] = React.useState('');

    // names of families of products (familije) (e.g. Bakarne cevi, fiting, armatura, ...)
    const [families, setFamilies] = React.useState([]);

    // state of submenu (open or closed)
    const [submenu, setSubmenu] = React.useState(false);

    // string typed into the search textfield
    const [searchParam, setSearchParam] = React.useState('');

    // when search is set to motion, this state is set to true (to open searchSubmenu)
    const [searchSubmenu, setSearchSubmenu] = React.useState(false);

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
    
    function openSearchSubmenu() {
        setSearchSubmenu(true);
    }
    
    function closeSearchSubmenu() {
        setSearchSubmenu(false);
    }

    // ! UNICODE to ASCII Search functions
    // check all words for unicode chars
    function isCirylicWord(word) {
        // eslint-disable-next-line no-control-regex
        return /[^\u0000-\u00ff]/.test(word);
    }

    // convert UNICODE to ASCII following provided map
    function convertCir2ASC(word) {
        const comparatorMap = {
        'Č': 'C', 
        'Ć': 'C', 
        'č': 'c',
        'ć': 'c',
        'Đ': 'Dj',
        'đ': 'dj',
        'Š': 'S',
        'š': 's',
        'Ž': 'Z',
        'ž': 'z'
        }
        const output = []
        for(const char of word) {
            comparatorMap[char]
            ? output.push(comparatorMap[char])
            : output.push(char)
        }
        return output.join('')
    }

    /**
     loop through array and check if any of the strings are UNICODE:
        isCirylicWord(word),
    if yes, then convert to ASCII:
        convertCir2ASC(word),
    otherwise just push to new, 'clean' collection
    */
    // eslint-disable-next-line
    function checkArrayforUnicodeStrings(array) {
        const result = []
        array.forEach(word => {
            isCirylicWord(word)
            ? result.push(convertCir2ASC(word))
            : result.push(word)
        })
        return result
    }

    // function compares cleaned array indexes from the search, and returns same ones from original array
    // eslint-disable-next-line
    function searchedResultUnicode(Array, cleanedArray, searchedResult) {
        const result = []
        searchedResult.forEach(si => cleanedArray.forEach((ci, ind) => {
        si === ci && result.push(Array[ind])
        }))
        return result
    }

    function searchGroups(data, searchParam) {
        const lines_copy = JSON.parse(JSON.stringify(data));
        lines_copy.forEach(object => {
            object.families.forEach(family => {
                const groupsUNICODE = family.groups
                const groupsASCII = checkArrayforUnicodeStrings(groupsUNICODE)
                const groupsResultASCII = groupsASCII
                .filter(
                    group => {
                        return group
                        .toString()
                        .toLowerCase()
                        .includes(searchParam)
                })
                
                // converting result back to UNICODE
                const groupsResultUNICODE = searchedResultUnicode(groupsUNICODE, groupsASCII, groupsResultASCII)

                // reasigning object groups with found [result] or an empty array []
                if(groupsResultUNICODE.length) {
                    Object.assign(family, { groups: groupsResultUNICODE })
                } else if(!groupsResultUNICODE.length) {
                    Object.assign(family, { groups: groupsResultUNICODE })
                }
            })
        })
        const lines_filtered = []
        lines_copy.forEach(line => {
            const family = line.families.filter(family => family.groups.length)
            family.length && Object.assign(line, { families: family })
            family.length && lines_filtered.push(line)
        })
        return lines_filtered
    }

    function debounce(func, timeout = 250) {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => { func.apply(this, args); }, timeout);
        };
    }
    const setSearchParamDebounced = debounce((param) => setSearchParam(param));
    // const setSearchParamDebounced = (param) => setSearchParam(param)

    React.useEffect(() => {
        // ! open searchSubmenu
        // eslint-disable-next-line
        searchParam && openSearchSubmenu();
        // eslint-disable-next-line
        if(searchParam || searchParam === '') setLines_filteredData(searchGroups(lines, searchParam));
        // eslint-disable-next-line
    }, [searchParam]);

    return (
        <>
            <Submenu 
                submenu={submenu}
                closeSubmenu={closeSubmenu} 
                lineName={lineName} 
                families={families}
            />
            <SearchBar className="ch-searchbar" searchParam={setSearchParamDebounced} />
            <SearchSubmenu
                searchSubmenu={searchSubmenu}
                closeSearchSubmenu={closeSearchSubmenu}
                lines_filteredData={lines_filteredData}
            />
            <div className="ch-menu-splitter">
                PROGRAM
                <hr />
            </div>
            <List className="ch-list">
                {
                    lines_filteredData.map((line, index) => (
                        <React.Fragment key={index}>
                            <ListItem  disablePadding className="ch-menu-item">
                                <ListItemButton onClick={ () => {handleClick(index); openSubmenu()} }>
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

export default MenuItems;
