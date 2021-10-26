/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styles from './loadMoreButton.module.scss';

interface LoadMoreButtonProps {
  loadMore: () => void;
}

const LoadMoreButton = ({ loadMore }: LoadMoreButtonProps) => {
  return (
    <button className={styles.button} type="button" onClick={loadMore}>
      Carregar mais posts
    </button>
  );
};

export default LoadMoreButton;
