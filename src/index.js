import 'bootstrap';
import { refreshBtnListener, sumbitFormListener, displayList } from './listeners';
import { getScores } from './api';
import './app.scss';

(async () => {
  const { result } = await getScores();
  displayList(result);
})();

document.querySelector('#refresh-btn').addEventListener('click', refreshBtnListener);
document.querySelector('#add-a-score').addEventListener('submit', sumbitFormListener);