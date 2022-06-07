import { useState, useEffect } from 'react';

const useBoredAPI = (props) => {
  const [activityInput, setActivityInput] = useState('');
  const [participantsInput, setParticipantsInput] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://www.boredapi.com/api/activity?type=${props.activityInput}participants?=${props.participantsInput}`
      );
      const data = await response.json();

    };
  }, [activityInput, setActivityInput]);
};

export default useBoredAPI;
