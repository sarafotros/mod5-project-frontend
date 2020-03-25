import React, { useEffect, useState } from 'react'; 
import API from '../API';
import { Typography, Paper, Button } from '@material-ui/core';
import ShowIcon from '@material-ui/icons/EventNote';
import { Link , Redirect } from 'react-router-dom';
import useStyles from '../styles/containers/HandyContracts';



function HandyContratcs() {

	const classes = useStyles();

    const [data, setData] = useState(null);
    

    //componentDidMount in functional cmp
    useEffect(() => {
        API.getRequests()
            .then(requests => {
                const myRequests = requests.filter(req => req.handy_man_id == localStorage.handyman_id)
                setData(myRequests)
            });
    }, []);

    console.log('data: ', data);
     if (!localStorage.token) {
				return <Redirect to="/" />;
			}
    return (
			<div>
				{!data ? (
					<Typography>Loading...</Typography>
				) : (
					<>
						<Typography variant="h4">My Contracts:</Typography>
						{data.map(contract => (
							<Paper key={contract.id} className={classes.contractBox}>
								<div className={classes.contractText}>
									<Typography variant="h5">{contract.service.name}</Typography>
									<Typography>{contract.date}</Typography>
									<Typography>{contract.time}</Typography>
								</div>
								<Link
									to={'bookings/' + contract.id}
									className={classes.contractBtn}
								>
									<Button
										variant="contained"
										color="primary"
										className={classes.button}
										endIcon={<ShowIcon />}
									>
										Show Details
									</Button>
								</Link>
							</Paper>
						))}
					</>
				)}
			</div>
		);

}
 
export default HandyContratcs;
