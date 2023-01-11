import React from 'react';
import { useParams } from 'react-router-dom';

import styles from './VocabularyWrapper.module.scss';
import { useFetch } from 'hooks';
import { Loading } from 'components';
import { VocabularyItemProps } from 'models';
import VocabularyContent from '../VocabularyContent';

type VocabularyContent = {
  vocabulary: VocabularyItemProps[];
};

function VocabularyWrapper() {
  const { lessonNumber } = useParams();
  const [loading, error, payload] = useFetch<VocabularyContent>(`lessons/${lessonNumber}`, {
    credentials: 'include',
  });

  if (loading) return <Loading large />;
  if (error) return <p className={styles.error}>{error}</p>;
  if (!payload) return <p className={styles.error}>Data not found.</p>;

  return <VocabularyContent vocabulary={payload.vocabulary} />;
}

export default VocabularyWrapper;
