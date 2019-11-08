import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { SocialIcon } from 'react-social-icons';
import * as colors from '../res/colors';
import * as dimens from '../res/dimens';

const socialResources = [
    {
        url: 'https://github.com/awsamios',
        bgColor: colors.primaryTextColor
    },
    {
        url: 'https://www.linkedin.com/in/samiraaouine/',
        bgColor: colors.primaryTextColor
    }
];

const SocialIconList = ({ classes, ...props }) => {
    return (
        <Grid className={classes.container} {...props}>
            {socialResources.map((item, index) => (
                <SocialIcon key={index} {...item} style={styles.item} />
            ))}
        </Grid>
    );
};

SocialIconList.propTypes = {
    ...Grid.propTypes,
    classes: PropTypes.object.isRequired
};

const styles = {
    container: {
        item: true,
        container: true,
        spacing: dimens.spacing.small,
        backgroundColor: colors.transparent
    },
    item: {
        margin: dimens.spacing.small,
        fontSize: dimens.fontSize.socialIcon
    }
};
export default withStyles(styles)(SocialIconList);