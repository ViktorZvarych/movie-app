import {useEffect, useState} from "react";

import {IGenre, IGenres} from "../../../interfaces";
import {moviesService} from "../../../services";
import {Genre} from "./Genre";
import {useLocation, useSearchParams} from "react-router-dom";


import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: 50 * 4.5 + 8,
            width: 250,
        },
    },
};

const GenresList  = () => {

    const [genresArr, setGenresArr] = useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof genresArr>) => {
        const {
            target: { value },
        } = event;

        setGenresArr(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const [, setUrlParams] = useSearchParams();

    useEffect(() => {
        setUrlParams(prev => {
            if (genresArr[0]) {
                prev.set('with_genres', genresArr.join(','));
            } else {
                prev.delete('with_genres');
            }
            return prev;
        });
    }, [setUrlParams, genresArr])



    console.log('render GenresList');

    const {state} = useLocation();
    useEffect(() => {
        console.log(state);
    }, [state]);

    const [genres, setGenres] = useState<IGenres | null>(null);

    useEffect(() => {
        try {
            (async (): Promise<void> => {
                const {data} = await moviesService.getGenres();
                setGenres(data);
            })()
        } catch (e) {
            console.log(e);
        }
    }, [])

    return (
            <div>
                <FormControl sx={{m: 1, width: 300}}>
                    <InputLabel id="demo-multiple-chip-label">Genres</InputLabel>
                    <Select
                        labelId="demo-multiple-chip-label"
                        id="demo-multiple-chip"
                        multiple
                        value={genresArr}
                        onChange={handleChange}
                        input={<OutlinedInput id="select-multiple-chip" label="Chip"/>}
                        renderValue={(selected) => (
                            <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
                                {/*{selected.map((value) => (*/}
                                {/*    <Chip key={value} />*/}
                                {/*))}*/}
                            </Box>
                        )}
                        MenuProps={MenuProps}
                    >
                        {genres && genres.genres.map((genre: IGenre) => (
                            <MenuItem
                                key={genre.id}
                                value={genre.id}
                                title={genre.name}
                            >
                                <Genre key={genre.id} genre={genre}/>
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
    );
};

export {GenresList};