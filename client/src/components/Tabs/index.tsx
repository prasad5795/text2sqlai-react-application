import React, { useState } from 'react';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import IconButton from '@mui/material/IconButton';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import styled from 'styled-components';
import ToggleButton from '@mui/material/ToggleButton';

export const Tabs = () => {
  const [alignment, setAlignment] = useState('Generate');

  const handleChange = (event: any, newAlignment: string) => {
    setAlignment(newAlignment);
  };

  return (
    <div>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
        className="mb-5 lg:mb-10 px-4 sm:px-8 py-4 lg:py-6 w-full bg-black/40 rounded-3xl shadow-2xl shadow-black/50 order-1 ring-4 ring-gray-600/10 flex justify-between items-center"
      >
        <StyledToggleButton
          value="Generate"
          className="my-1 mr-5 w-full bg-gray-900 hover:bg-gray-800 ring-4 ring-white/5 hover:ring-[#cb6ce6] text-md rounded-xl py-1 px-3 disabled:ring-white/10 disabled:bg-gray-800 flex items-center justify-center gap-x-2"
        >
          Generate
        </StyledToggleButton>
        <IconButton aria-label="swap">
          <SwapHorizIcon />
        </IconButton>
        <StyledToggleButton
          value="Explain"
          className="my-1 mr-5 w-full bg-gray-900 hover:bg-gray-800 ring-4 ring-white/5 hover:ring-[#cb6ce6] text-md rounded-xl py-1 px-3 disabled:ring-white/10 disabled:bg-gray-800 flex items-center justify-center gap-x-2"
        >
          Explain
        </StyledToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

const StyledToggleButton = styled(ToggleButton)`
  color: white !important;
`;
