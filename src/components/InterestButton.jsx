import { Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

function InterestButton({
  projectId,
  userType,
  changeInterest,
  setChangeInterest,
  match,
  defineMatch,
  handleInterest,
  matches,
  foundMatchId,
}) {
  const [singleMatch, setSingleMatch] = useState(null);
  useEffect(() => {
    defineMatch(projectId, userType);
    // console.log(match);
    if (match) {
      setSingleMatch(true);
    } else {
      setSingleMatch(false);
    }
  }, [matches, match]);

  useEffect(() => {
    handleInterest(projectId, userType);
    setSingleMatch(!singleMatch);
  }, [changeInterest]);

  //   console.log(foundMatchId, projectId);

  return (
    <Button onClick={() => setChangeInterest(!changeInterest)}>
      {singleMatch ? 'Remove Interest' : 'Show Interest'}
    </Button>
  );
}

export default InterestButton;
