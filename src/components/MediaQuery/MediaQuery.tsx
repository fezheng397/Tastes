import React, { useState, useCallback } from 'react';
import debounce from 'lodash/debounce';
// @ https://github.com/oliviertassinari/react-event-listener
import EventListener from 'react-event-listener';
import { Query, MediaQuerySize, MediaQueryType } from 'constants/breakpoints';

interface MediaQueryProps {
  children: React.ReactNode;
  queryType: MediaQueryType;
  size: MediaQuerySize;
}

const MediaQuery: React.FC<MediaQueryProps> = ({
  children,
  queryType,
  size,
}) => {
  let mediaQuery = window.matchMedia(Query(queryType, size));
  const [show, setShow] = useState(mediaQuery.matches);

  const handleResize = useCallback(
    debounce(
      () => {
        setShow(mediaQuery.matches);
      },
      100,
      { trailing: true, leading: true, maxWait: 400 }
    ),
    [show]
  );

  return (
    <React.Fragment>
      <EventListener target='window' onResize={handleResize} />
      {show && children}
    </React.Fragment>
  );
};

export default MediaQuery;
