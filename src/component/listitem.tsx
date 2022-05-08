import React, { useState } from "react";
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton, Divider } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';

interface IList {
    img_path : String,
    name: String,
    price: Number,
    note?: String,
}

const MyList = (props: IList) => {

    const [secondary, setSecondary] = useState(false) ;

    return (
        <div>
            <List>
                <ListItem>
                    <ListItemAvatar>
                        {props.img_path ? 
                            <Avatar alt="menu" src={`${props.img_path}`} variant="square" sx={{ width: 75, height: 75 }} /> : 
                            <Avatar></Avatar>
                        }
                    </ListItemAvatar>
                    <ListItemText
                        primary={props.name}
                        secondary={secondary ? 'Secondary text' : null}
                    />
                    <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
            <Divider />
        </div>
    )
}

export default MyList ;