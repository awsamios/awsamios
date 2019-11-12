import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridContainer from '../../container/GridContainer';
import QFText from '../QFText';
import QFGridItem from '../QFGridItem';
import SkillChip from './SkillChip';
import { responsiveContainer } from '../../styles';
import { resolver } from '../../res/resolver';
import { strings } from '../../i18n';

const SkillRow = ({ classes, items, ...props }) => (
    <Fragment>
        <GridContainer
            container
            item
            xs={12}
            sm={4}
            md={4}
            className={classes.infoContainer}
        >
            <QFGridItem xs={12}>
                <QFText
                    text={strings.skills.mobile}
                    font="bold"
                    variant="h5"
                    className={classes.title}
                />
            </QFGridItem>
            <GridContainer
                container
                item
                xs={12}
                className={classes.iconContainer}
            >
                <QFGridItem xs={12} sm={6} md={6}>
                    <SkillChip
                        icon={resolver.android}
                        text={strings.skills.android.name}
                    />
                    <SkillChip
                        icon={resolver.kotlin}
                        text={strings.skills.kotlin.name}
                    />
                    <SkillChip
                        icon={resolver.java}
                        text={strings.skills.java.name}
                    />
                </QFGridItem>

                <QFGridItem xs={12} sm={6} md={6}>
                    <SkillChip
                        icon={resolver.rn}
                        text={strings.skills.rn.name}
                    />
                </QFGridItem>
            </GridContainer>
        </GridContainer>

    </Fragment>
);

const SkillInfo = ({ classes, items }) => {
    return (
        <GridContainer
            justify="center"
            alignItems="center"
            container
            className={classes.root}
            spacing={8}
        >
            <GridContainer
                container
                justify="center"
                alignItems="flex-start"
                item
                xs={12}
                spacing={24}
            >
                <SkillRow classes={classes} items={items} />
            </GridContainer>
        </GridContainer>
    );
};
const styles = theme => ({
    root: {
        marginRight: 'auto',
        marginLeft: 'auto',
        ...responsiveContainer(theme)
    },
    infoContainer: {
        textAlign: 'center',
        flexWrap: 'wrap'
    },
    iconContainer: {
        flexWrap: 'wrap',
        textAlign: 'start',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center'
        }
    }
});

SkillInfo.propTypes = {
    classes: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired
};

SkillInfo.defaultProps = {
    items: []
};

export default withStyles(styles)(SkillInfo);
