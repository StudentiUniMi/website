import * as React from 'react';
import { ActivityItem, IActivityItemProps, Link, mergeStyleSets } from 'office-ui-fabric-react';

const classNames = mergeStyleSets({
    exampleRoot: {
        marginTop: '20px',
    },
    nameText: {
        fontWeight: 'bold',
    },
});

export const Activity: React.FunctionComponent = () => {
    /* eslint-disable react/jsx-no-bind */
    const activityItemExamples: (IActivityItemProps & { key: string | number })[] = [
        {
            key: 1,
            activityDescription: [
                <Link
                    key={1}
                    className={classNames.nameText}
                    onClick={() => {
                        alert('A name was clicked.');
                    }}
                >
                    Giuseppetm
        </Link>,
                <span key={2}> sta creando </span>,
                <span key={3} className={classNames.nameText}>
                    il cristo di dio di sito.
        </span>,
            ],
            activityPersonas: [{ /*imageInitials: 'DF'*/ imageUrl: 'profileRecolored2.png' }],
            comments: 'Phega che bello fluentui, divertente',
            timeStamp: '26 Novembre 2020',
        },
    ];

    return (
        <div>
            {activityItemExamples.map((item: { key: string | number }) => (
                <ActivityItem {...item} key={item.key} className={classNames.exampleRoot} />
            ))}
        </div>
    );
};
