import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import eventBus from '../eventBus';

export default function BasicTextFields({searchParam, className}) {

	const [value, setValue] = React.useState("");

	const clearInput = () => {
		setValue('');
		searchParam('');
	}

	React.useEffect(() => {
		eventBus.on('stopSearch', () => {
			clearInput();
		});

    // remove the event listener when the component unmounts
    return () => {
      	eventBus.off('stopSearch', () => {
        		clearInput();
      		});
    	}
  	});

  	return (
    	<Box
			className={className}
			component="form"
			sx={{
				'& > :not(style)': { m: 0, width: '30ch', mb: 2, zIndex: 4, },
			}}
			noValidate
			autoComplete="off"
    	>
      		<TextField id="outlined-basic" label="Pretraga grupa" variant="outlined"
				// ! to have the input field focused on page load
				// inputRef={(input) => {
				// 	if(input != null) {
				//     	input.blur();
				//   	}
				// }}
				value={value}
				onKeyPress={e => e.key === 'Enter' && e.preventDefault()}
				onChange={(e) => {
					setValue(e.target.value.toLowerCase()); // isn't synchronous. It creates a "pending state transition" | used to set value attr for cleaning the input field on exit
					searchParam(e.target.value.toLowerCase()); // so here we have to use the value from the event
					// searchParam(value); // this would be always one step late
				}}
				sx={{
					"& .MuiFormLabel-root": {

						// color of the label [Pretraga]
						color: "white",
						
						// color of the focused label [Pretraga]
						"&.Mui-focused": {
							color: "white",
						}
					},
					// color of the input text
					"& .MuiOutlinedInput-root": {
						color: "white",
					},
					// color of the outlined input
					"& .MuiOutlinedInput-notchedOutline": {
						borderColor: "orange",
					},
					// color of the outlined input on hover
					"& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
						borderColor: "orange",
					},
					// color of the outlined input on focus
					"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
						borderColor: "orange",
					},
				}}
			/>
		</Box>
	);
}