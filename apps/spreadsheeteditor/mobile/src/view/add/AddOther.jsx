import React from 'react';
import {List, ListItem, Icon} from 'framework7-react';
import { useTranslation } from 'react-i18next';
import { observer, inject } from "mobx-react";

const AddOther = props => {
    const { t } = useTranslation();
    const _t = t('View.Add', {returnObjects: true});
    const hideAddComment = props.hideAddComment();
    const storeFocusObjects = props.storeFocusObjects;
    let hideOtherText = storeFocusObjects.selections.indexOf('text') > -1;

    return (
        <List>
            {!hideAddComment && <ListItem title={_t.textImage} link={'/add-image/'}>
                <Icon slot="media" icon="icon-insimage"></Icon>
            </ListItem>}
            <ListItem title={_t.textComment} onClick={() => {
                props.closeModal();
                Common.Notifications.trigger('addcomment');
            }}>
                <Icon slot="media" icon="icon-insert-comment"></Icon>
            </ListItem>
            {(!hideAddComment || hideOtherText) && <ListItem title={_t.textLink} link={'/add-link/'}>
                <Icon slot="media" icon="icon-link"></Icon>
            </ListItem>}
            {!hideAddComment && <ListItem title={_t.textSortAndFilter} link={'/add-sort-and-filter/'}>
                <Icon slot="media" icon="icon-sort"></Icon>
            </ListItem>}
        </List>
    )
};

export default inject("storeFocusObjects")(observer(AddOther));